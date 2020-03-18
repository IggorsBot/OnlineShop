from rest_framework import generics
from rest_framework.generics import get_object_or_404
from .serializers import OrderSerializer

from .cart import
from .models import OrderItem
from rest_framework.response import Response
from rest_framework import status
from .tasks import order_created

class CreateOrderView(generics.GenericAPIView):
    serializer_class = OrderSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        order = serializer.save()
        cart = Cart(request)
        for item in cart:
            OrderItem.objects.create(order=order,
                                     product=item['product'],
                                     price=item['price'],
                                     quantity=item['quantity'])
        cart.clear()
        order_created.delay(order.id)
        request.session['order_id'] = order.id
        return Response({
            "order": OrderSerializer(order, context=self.get_serializer_context()).data
        }).setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");

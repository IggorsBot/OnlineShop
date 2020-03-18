import braintree
from rest_framework import generics
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from .serializers import OrderSerializer

from django.apps import apps
Order = apps.get_model('orders', 'Order')


class PaymentView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = OrderSerializer

    def get(self, request, *args, **kwargs):
        client_token = braintree.ClientToken.generate()
        return Response({
            "customer_id": client_token
        }).setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");

    def post(self, request):
        order_id = request.session.get('order_id')
        order = get_object_or_404(Order, id=order_id)
        nonce = request.data['payment_method_nonce']
        result = braintree.Transaction.sale({
            'amount': '{:.2f}'.format(order.get_total_cost()),
            'payment_method_nonce': nonce,
            'options': {
                'submit_for_settlement': True
            }
        })

        if result.is_success:
            order.paid = True
            order.braintree_id = result.transaction.id
            order.save()
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_204_NO_CONTENT)

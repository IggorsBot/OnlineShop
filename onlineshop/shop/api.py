from rest_framework import generics
from rest_framework.generics import get_object_or_404
from .serializers import CartSerializer, ProductSerializer, CategorySerializer, \
    ProductListSerializer, ProductDetailSerializer

from .cart import Cart
from .models import Product, Category
from rest_framework.response import Response
from rest_framework import status



class CartAddView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProductSerializer

    def delete(self, request, *args, **kwargs):
        product = get_object_or_404(Product, id=request.data['id_product'])
        cart = Cart(request)
        cart.remove(product)
        for i in cart.cart.keys():
            product = Product.objects.get(id=i)
            cart.cart[i]['name'] = product.name
            cart.cart[i]['price'] = str(product.price)
            cart.cart[i]['image'] = product.image.name
            cart.cart[i]['id'] = product.id
        serializer = CartSerializer(cart)
        return Response({
            "cart": serializer.data
        })

    def get(self, request, *args, **kwargs):
        cart = Cart(request)
        for i in cart.cart.keys():
            product = Product.objects.get(id=i)
            cart.cart[i]['name'] = product.name
            cart.cart[i]['price'] = product.price
            cart.cart[i]['image'] = product.image.name
            cart.cart[i]['id'] = product.id
        serializer = CartSerializer(cart)
        return Response({
            "cart": serializer.data,
        })

    def post(self, request):
        cart = Cart(request)
        product = get_object_or_404(Product, id=request.data['id_product'])
        cart.add(product=product,
                 quantity=request.data['quantity'],
                 update_quantity=request.data['update'])
        serializer = CartSerializer(cart)
        return Response({
            "cart": serializer.data,
        })


class CategoryListView(generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class ProductListView(generics.ListAPIView):
    serializer_class = ProductListSerializer

    def get_queryset(self):
        category = get_object_or_404(Category, slug=self.kwargs['slug'])
        products = Product.objects.filter(category=category)
        return products


class ProductDetailView(generics.GenericAPIView):
    serializer_class = ProductDetailSerializer

    def get(self, request, *args, **kwargs):
        product = Product.objects.get(id=kwargs['id'])
        return Response({
            "product": ProductDetailSerializer(product, context=self.get_serializer_context()).data
        })

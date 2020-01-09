from rest_framework import serializers
from .models import Product, Category, Book

class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'slug', 'name', 'price', 'category', 'image']


class ProductDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'slug', 'image']

class CartSerializer(serializers.Serializer):
    cart = serializers.DictField()


class BooksListSerializer(serializers.ModelSerializer):

    class Meta(ProductSerializer.Meta):
        model = Book
        fields = ProductSerializer.Meta.fields + ['author']

    # class Meta:
    #     model = Book
    #     fields = ['id', 'name', 'price', 'image']

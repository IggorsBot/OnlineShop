from rest_framework import serializers

from django.apps import apps
Order = apps.get_model('orders', 'Order')


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

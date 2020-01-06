from django.urls import path
from . import api as views

app_name = 'payment'

urlpatterns = [
    path('process', views.PaymentView.as_view()),
    path('test', views.PaymentView.as_view()),
]

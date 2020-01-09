from django.urls import path
from . import api as views

urlpatterns = [
    path('cart/add/', views.CartAddView.as_view()),
    path('categories/', views.CategoryListView.as_view()),
    path('products/<slug:slug>', views.ProductListView.as_view()),
    path('books/', views.BooksListView.as_view()),
    path('products/<slug:slug>/<int:id>/<slug:product_slug>', views.ProductDetailView.as_view()),
]

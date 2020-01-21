from django.urls import path
from . import views


urlpatterns = [
    path('', views.print_list, name="print_list"),
]
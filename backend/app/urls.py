from django.urls import path
from . import views


urlpatterns = [
    path('', views.print_list, name="print_list"),
    path('addtask', views.add_task, name="add_task"),
    path('deletetask', views.delete_task, name="delete_task"),
    # 임시
    path('todolist', views.todolist, name="todolist"),
]

from django.shortcuts import render


def print_list(request):
    return render(request, 'app/todolist.html', {})

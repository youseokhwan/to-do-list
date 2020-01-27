from django.shortcuts import render, redirect
from app.models import Task


# READ
def print_list(request):
    tasks = Task.objects.all()

    return render(request, 'app/todolist.html', {
        'tasks': tasks
    })


# CREATE
def add_task(request):
    num = len(Task.objects.all())
    content = request.POST['content'].strip()

    if len(content) == 0:  # 입력된 내용이 없음
        pass
    else:
        Task(num=num, content=content).save()

    return redirect('print_list')


# DELETE
def delete_task(request):
    last_num = len(Task.objects.all()) - 1
    num = request.POST['num'].strip()

    if len(num) == 0:
        pass
    else:
        num = int(num)
        if 0 <= num <= last_num:
            Task.objects.get(num=num).delete()
            for i in range(num + 1, last_num + 1):
                task = Task.objects.get(num=i)
                task.num -= 1
                task.save()

    return redirect('print_list')

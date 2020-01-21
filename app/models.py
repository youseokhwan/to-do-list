from django.db import models


class Task(models.Model):
    num = models.IntegerField()
    content = models.CharField(max_length=200)
    isFinish = models.BooleanField()

    def __str__(self):
        if self.isFinish:
            return "완료) " + self.content
        else:
            return "진행중) " + self.content

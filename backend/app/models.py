from django.db import models


class Task(models.Model):
    num = models.IntegerField()
    content = models.CharField(max_length=200)

    def __str__(self):
        return self.content

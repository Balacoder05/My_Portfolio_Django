from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title

class Skill(models.Model):
    name = models.CharField(max_length=50)
    level = models.CharField(max_length=50, blank=True, null=True)  # e.g. Beginner, Intermediate, Expert

    def __str__(self):
        return self.name


# Create your models here.

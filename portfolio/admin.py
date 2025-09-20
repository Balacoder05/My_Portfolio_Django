from django.contrib import admin
from .models import Project, Skill

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "link")

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ("name", "level")


# Register your models here.

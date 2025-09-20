from django.shortcuts import render
from .models import Project, Skill

def home(request):
    projects = Project.objects.all()
    skills = Skill.objects.all()
    return render(request, "portfolio/index.html", {
        "projects": projects,
        "skills": skills,
    })


from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings

def index(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        send_mail(
            f'Hire Me Request from {name}',
            f'Name: {name}\nEmail: {email}\nMessage:\n{message}',
            settings.DEFAULT_FROM_EMAIL,
            [settings.DEFAULT_FROM_EMAIL],  # Your email
            fail_silently=False,
        )
        return render(request, 'index.html', {'success': True})

    return render(request, 'index.html')


# Create your views here.

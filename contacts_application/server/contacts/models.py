from django.db import models
from django.utils import timezone
from django.core.validators import MaxValueValidator, MinValueValidator


class Contact(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=14)
    pic = models.ImageField(upload_to = 'assets/images', default = '/assets/images/default.jpg')

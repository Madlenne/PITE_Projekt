from django.db import models

# Create your models here.

class Place(models.Model):
    title = models.CharField(max_length=500)

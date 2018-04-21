from django.db import models

# Create your models here.

class Place(models.Model):
    name = models.CharField(max_length=500)
    photoRef = models.CharField(max_length=500)
    placeId = models.CharField(max_length=200,unique=True)
    vicinty = models.CharField(max_length=500)
    latitude = models.FloatField()
    longitude = models.FloatField()

from django.db import models
from rest_framework.reverse import reverse
# Create your models here.

class Place(models.Model):
    name = models.CharField(max_length=500)
    photoRef = models.CharField(max_length=500)
    placeId = models.CharField(max_length=200,primary_key=True)
    vicinty = models.CharField(max_length=500)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def get_api_url(self, request = None):
        return reverse("places-rud", kwargs ={'placeId': self.placeId}, request = request)


class User(models.Model):
    user_id = models.CharField(max_length=200,primary_key=True)
    is_guide = models.BooleanField()

    def get_api_url(self, request = None):
        return reverse("users-rud", kwargs ={'user_id': self.user_id}, request = request)
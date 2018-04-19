from django.contrib.auth.models import User, Group
from api.models import Place 
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.decorators import api_view
from api.serializers import PlaceSerializer

class PlaceView(generics.ListCreateAPIView):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Place.objects.all()
    model = Place
    serializer_class = PlaceSerializer
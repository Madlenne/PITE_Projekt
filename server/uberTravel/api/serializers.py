from api.models import Place
from rest_framework import serializers


class PlaceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Place
        fields = ['name','photoRef','placeId','vicinty','latitude','longitude']
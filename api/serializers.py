from api.models import Place,User
from rest_framework import serializers


class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = ['name','photoRef','placeId','vicinty','latitude','longitude']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_id','is_guide']
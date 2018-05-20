from api.models import Place,User
from rest_framework import serializers


class PlaceSerializer(serializers.ModelSerializer):
    url         = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = Place
        fields = [
            'url',
            'name',
            'photoRef',
            'placeId',
            'vicinty',
            'latitude',
            'longitude'
            ]
        read_only_fields = ['placeId']

    def get_url(self,obj):
        request = self.context.get("request")
        return obj.get_api_url(request=request)

    def validate_name(self,value):
        qs = Place.objects.filter(name__iexact=value)
        if self.instance:
            qs = qs.exclude(placeId = self.instance.placeId)
        if qs.exists():
            raise serializers.ValidationError("The place is already here")


class UserSerializer(serializers.ModelSerializer):
    url         = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = User
        fields = [
        'url',
        'user_id',
        'is_guide'
        ]

    def get_url(self,obj):
        request = self.context.get("request")
        return obj.get_api_url(request=request)

    def validate_name(self,value):
        qs = User.objects.filter(user_id__iexact=value)
        if qs.exists():
            raise serializers.ValidationError("This user already exists")
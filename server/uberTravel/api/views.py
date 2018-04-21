from django.contrib.auth.models import Group
from api.models import Place, User
from rest_framework import viewsets,status,generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from api.serializers import PlaceSerializer,UserSerializer

class PlaceView(generics.ListCreateAPIView):
    queryset = Place.objects.all()
    model = Place
    serializer_class = PlaceSerializer

class UserView(APIView):
    def get(self, request, user_id):
        try:
            user = User.objects.get(user_id=user_id)
        except User.DoesNotExist:
            user = User(user_id=user_id,is_guide=False)
            user.save()
            
        return Response(UserSerializer(user).data)

    def put(self, request, user_id):
        try:
            user = User.objects.get(user_id=user_id)
        except User.DoesNotExist:
            user = User(user_id=user_id,is_guide=False)
            user.save()

        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
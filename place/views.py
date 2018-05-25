from rest_framework import generics, mixins
from .models import Place
from .serializers import PlaceSerializer
from django.db.models import Q

class PlaceView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field        = 'placeId'
    serializer_class    = PlaceSerializer

    def get_queryset(self):
        qs = Place.objects.all()
        query = self.request.GET.get("q")
        if query is not None:
            qs = qs.filter(Q(name__icontains=query)|Q(vicinty__icontains=query)).distinct()
        return qs

    def post(self,request,*args,**kwargs):
        return self.create(request, *args, **kwargs)

    def get_serializer_context(self, *args, **kwargs):
        return {"request": self.request}

class PlaceRudView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field        = 'placeId'
    serializer_class    = PlaceSerializer

    def get_queryset(self):
        return Place.objects.all()

    def get_serializer_context(self, *args, **kwargs):
        return {"request": self.request}


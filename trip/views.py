from rest_framework import generics, mixins
from .models import Trip
from .forms import TripForm, AllTripsGetForm
from .serializers import TripSerializer
from django.db.models import Q
from django.http import JsonResponse
from django.core import serializers


class TripView(mixins.CreateModelMixin, generics.ListAPIView):
    lookup_field = 'pk'
    serializer_class = TripSerializer

    def get_queryset(self):
        qs = Trip.objects.all()
        query = self.request.GET.get("userid")
        if query is not None:
            qs = qs.filter(Q(userId__icontains=query))
        query = self.request.GET.get("tripid")
        if query is not None:
            qs = qs.filter(Q(pk__icontains=query))
        return qs

    def post(self,request):
        if request.method == "POST":
            form = TripForm(request.data)
            if form.is_valid():
                trip = form.save()
                trip.save()
                return JsonResponse({'tripId' : trip.pk})
            else:
                 return JsonResponse({'trip': form.errors}, status=422)

    def get_serializer_context(self, *args, **kwargs):
        return {"request": self.request}

class TripRudView(generics.RetrieveUpdateDestroyAPIView):
    pass
    lookup_field = 'pk'
    serializer_class = TripSerializer

    def get_queryset(self):
        return Trip.objects.all()

    def get_serializer_context(self, *args, **kwargs):
        return {"request": self.request}
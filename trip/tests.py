from rest_framework import status
from rest_framework.test import APIRequestFactory,APIClient,APITestCase
from django.contrib.auth import get_user_model
from place.models import Place
from user.models import User as User_model
from .models import Trip
from rest_framework.reverse import reverse
from .views import TripView

User = get_user_model()

class PlaceTestCase(APITestCase):
    def setUp(self):
        user = User(username='testcfuser', email='test@test.com')
        user.set_password("qwerty")
        user.save()
        place = Place.objects.create(
            name='Kraków Barbican',
            photoRef='CmRaAAAA5BVnVf3jbhlpkmnjhzDF_lSr9y0fuMFqjDUe6j8a4AvyoCwPf1jKUp6wyeisieoQuPvArPQ7_GXXkX3j9a4HWowGHcDR-V5SvQ_R5iVj7h5RMwbpBzlw9_rC0FYdw6S0EhC9kT0XSOERfzAF9ONCtvhrGhRLaEz1k5gAK-ZLki8v9jkfjrt4hA',
            placeId= 'ChIJjUf7MRBbFkcRg9Ls9752tqU',
            vicinty= 'Basztowa, Kraków',
            latitude= 50.0654718,
            longitude=19.9416613
            )

        user_m = User_model.objects.create(
            user_id = '24f',
            is_guide = True
            )
        user_tourist = User_model.objects.create(
            user_id = '13',
            is_guide = False
            )

        trip = Trip.objects.create(
            userId = '13',
            tripName = 'random name',
            tripDescription = 'decsription',
            )
        trip.places.add(place)

    def test_add_item_trip(self):
        data = {
            'userId' : '13',
            'tripName' : 'kazimierz',
            'tripDescription' : 'wycieczka',
            'places' : [
                'ChIJjUf7MRBbFkcRg9Ls9752tqU'
            ]
        }
        url = reverse("trips-list")
        response = self.client.post(url, data, format='json')
        self.assertJSONEqual(str(response.content,encoding='utf8'),{'tripId': 2})
        self.assertEqual(response.status_code,200)

    def test_get_all_items_per_user_trip(self):
        response = self.client.get('/api/trips/?userid=13')


from rest_framework import status
from rest_framework.test import APIRequestFactory,APIClient,APITestCase
from django.contrib.auth import get_user_model
from api.models import Place
from api.models import User as User_model
from rest_framework.reverse import reverse

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

    def test_single_user(self):
        user_count = User.objects.count()
        self.assertEqual(user_count, 1)

    def test_single_place(self):
        place_count = Place.objects.count()
        self.assertEqual(place_count, 1)

    def test_get_list(self):
        data = {}
        url = reverse("places-list")
        response = self.client.get(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_list_user(self):
        data = {}
        url = reverse("users-list")
        response = self.client.get(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    """def test_get_status_code_is_200(self):
        client = APIClient()
        response = client.get('/api/places/')
        print(response)
        self.assertTrue(response.status_code == 200,'Incorrect response status code {0}'.format(response.status_code))"""


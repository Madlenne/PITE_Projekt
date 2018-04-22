from django.test import TestCase
from rest_framework.test import APIRequestFactory,APIClient

class PlacesViewTests(TestCase):
    def test_get_status_code_is_200(self):
        client = APIClient()
        response = client.get('/api/places/')
        print(response)
        self.assertTrue(response.status_code == 200,'Incorrect response status code {0}'.format(response.status_code))

from rest_framework import viewsets
from contacts.models import Contact
from contacts.serializers import ContactSerializer

class ContactViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Contact objects """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    # def list(self, request):
    #     print("list:", request)
    #     return
    #
    # def retrieve(self, request, pk=None):
    #     print("retrieve:", request)
    #
    # def create(self, request):
    #     print("create:", request)
    #
    # def update(self, request, pk=None):
    #     print("update:", request)
    #
    # def partial_update(self, request, pk=None):
    #     print("partial_update:", request)
    #
    # def destroy(self, request, pk=None):
    #     print("destroy:", request)

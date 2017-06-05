from rest_framework import viewsets
from rest_framework.response import Response
from contacts.models import Contact
from contacts.serializers import ContactSerializer

class ContactViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Contact objects """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request):
        print("PRINTING START HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE:")

        print(request.data['name'])
        new_contact = Contact(name=request.data['name'],phone_number=request.data['number'],pic='/assets/images/default.jpg')
        new_contact.save()
        return new_contact

    #
    #     def retrieve(self, request, pk=None):
    #         print("retrieve:", request)
    #
    #         def create(self, request):
    #             print("create:", request)
    #
    #             def update(self, request, pk=None):
    #                 print("update:", request)
    #
    #                 def partial_update(self, request, pk=None):
    #                     print("partial_update:", request)
    #
    #                     def destroy(self, request, pk=None):
    #                         print("destroy:", request)

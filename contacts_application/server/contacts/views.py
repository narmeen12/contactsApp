from rest_framework import viewsets
from rest_framework.response import Response
from contacts.models import Contact
from contacts.serializers import ContactSerializer
from django.shortcuts import redirect

class ContactViewSet(viewsets.ModelViewSet):
    """ ViewSet for viewing and editing Contact objects """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request):
        serializer = ContactSerializer

        new_contact = Contact(name=request.data['name'],phone_number=request.data['number'],pic='/assets/images/default.jpg')
        new_contact.save()
        return redirect('/')
        return Response({'detail': 'Contact Created'})

    def delete(self,request,pk=None):

        obj = self.queryset.get(pk=pk)
        obj.delete

        return Response({'detail': 'Contact Deleted'})

# The above code defines a ContactViewSets. It is a class that comes pre-packaged with all CRUD operations and is based off the existing Contacts model.

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
        print(request)
        serializer = ContactSerializer

        new_contact = Contact(name=request.data['name'],phone_number=request.data['number'],pic='/assets/images/default.jpg')
        new_contact.save()
        return redirect('/')
        return Response({'detail': 'this works'})

    def delete(self,request,pk=None):
        print("PRINTING START HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE:")
        # to_be_removed = Contact.objects.filter()


        obj = self.queryset.get(pk=pk)
        obj.delete

        print("lets delete things:",request.data)

        return Response({'detail': 'still not working'})

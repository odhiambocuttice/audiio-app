from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import RadioShows
from .serializers import RadioShowsSerializer
from rest_framework import permissions
from rest_framework.generics import ListAPIView, RetrieveAPIView


class RadioShowsRetrievView(ListAPIView):
    queryset = RadioShows.objects.order_by('id')
    serializer_class = RadioShowsSerializer
    # lookup_field = 'slug'
    permissions_classes = (permissions.AllowAny, )


# class RadioShowsRetrievView(APIView):
#     def get(self, format=None):
#         radio_shows = RadioShows.objects.all()
#         try:
#             if radio_shows.exists():
#                 radio_shows_ser = RadioShowsSerializer(radio_shows, many=True)
#                 return Response(
#                     {'posters': radio_shows_ser.data}, status=status.HTTP_200_OK
#                 )
#             else:
#                 return Response(
#                     {'error': 'No Show Posters found '},
#                     status=status.HTTP_400_BAD_REQUEST
#                 )
#         except:
#             return Response(
#                 {'error': 'Something went wrong when retrieving the posters'},
#                 status=status.HTTP_500_INTERNAL_SERVER_ERROR
#             )


# class RadioShowsUploadView(APIView):
#     '''Getting Images already in the DB'''

#     def post(self, request, format=None):
#         try:
#             data = self.request.data
#             show_poster = data['show_poster']
#             poster_title = data['poster_title']
#             show_description = data['show_description']\

#             RadioShows.create(
#                 show_poster=show_poster, poster_title=poster_title,
#                 show_description=show_description
#             )
#             return Response(
#                 {'success': 'Poster Uploaded successfully'},
#                 status=status.HTTP_201_CREATED
#             )
#         except:
#             return Response(
#                 {'error': 'Something went wrong when retrieving the posters'},
#                 status=status.HTTP_500_INTERNAL_SERVER_ERROR
#             )

class RadioShowsUploadView(APIView):
    serializer_class = RadioShowsSerializer
    permissions_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        poster_title = data['poster_title']
        queryset = RadioShows.objects.order_by(
            'id').filter(poster_title__iexact=poster_title)
        serializer = RadioShowsSerializer(queryset, many=True)

        return Response(serializer.data)

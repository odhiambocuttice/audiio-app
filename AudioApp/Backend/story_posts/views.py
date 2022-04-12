from django.db.models.query import QuerySet
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import StoryPost
from .serializers import StoryPostSerializer


class StoryPostListView(ListAPIView):
    queryset = StoryPost.objects.order_by('-date_created')
    serializer_class = StoryPostSerializer
    lookup_field = 'slug'
    permissions_classes = (permissions.AllowAny, )


class StoryPostDetailView(RetrieveAPIView):
    queryset = StoryPost.objects.order_by('-date_created')
    serializer_class = StoryPostSerializer
    lookup_field = 'slug'
    permissions_classes = (permissions.AllowAny, )


class StoryPostFeaturedView(ListAPIView):
    queryset = StoryPost.objects.all().filter(is_feature_post=True)
    serializer_class = StoryPostSerializer
    lookup_field = 'slug'
    permissions_classes = (permissions.AllowAny, )


class StoryPostCategoriesView(APIView):
    serializer_class = StoryPostSerializer
    permissions_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data
        category = data['category']
        queryset = StoryPost.objects.order_by(
            '-date_created').filter(category__iexact=category)
        serializer = StoryPostSerializer(queryset, many=True)

        return Response(serializer.data)

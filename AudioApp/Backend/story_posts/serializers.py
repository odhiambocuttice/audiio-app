from rest_framework import serializers
from .models import StoryPost

# Serializers define the API representation.


class StoryPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = StoryPost
        fields = '__all__'
        lookup_field = 'slug'

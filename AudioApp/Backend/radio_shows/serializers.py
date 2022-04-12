from rest_framework import serializers
from .models import RadioShows

# Serializers define the API representation.


class RadioShowsSerializer(serializers.ModelSerializer):
    class Meta:
        model = RadioShows
        fields = '__all__'

from django.db import models


class RadioShows(models.Model):
    show_poster = models.ImageField(upload_to='images/%Y/%m/%d/')
    poster_title = models.CharField(max_length=40, blank=False)
    show_description = models.CharField(max_length=255, blank=False)

    def __str__(self):
        return self.poster_title

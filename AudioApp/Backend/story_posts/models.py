from django.db import models
from datetime import datetime
from django.db.models.query import QuerySet
from django.template.defaultfilters import slugify
from django.utils import timezone


class Category(models.TextChoices):
    MUSIC = 'music'
    LIFESTYLE = 'lifestyle'


class StoryPost(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    category = models.CharField(
        max_length=125, choices=Category.choices, default=Category.MUSIC)
    story_image = models.ImageField(upload_to='images/%Y/%m/%d/')
    punch_line = models.CharField(max_length=150)
    author = models.CharField(max_length=50)
    story_content = models.TextField()
    is_feature_post = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=timezone.now, blank=True)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        no_of_storyposts = StoryPost.objects.all().filter(
            slug__iexact=original_slug).count()

        count = 1
        slug = original_slug

        while(no_of_storyposts):  # keep running untill you find a unique slug
            slug = original_slug + '_' + str(count)
            count += 1
            no_of_storyposts = StoryPost.objects.all().filter(
                slug__iexact=slug).count()
        self.slug = slug

        if self.is_feature_post:
            try:
                temp = StoryPost.objects.get(is_feature_post=True)
                if self != temp:
                    temp.is_feature_post = False
                    temp.save()
            except StoryPost.DoesNotExist:
                pass
        super(StoryPost, self).save(*args, **kwargs)

    def date_published(self):
        return self.date_created.strftime('%Y/%m/%d/')

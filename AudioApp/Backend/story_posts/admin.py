from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import StoryPost

# Apply summernote to all TextField in model.


class Admin(SummernoteModelAdmin):
    exclude = ('slug',)
    list_display = ('id', 'title', 'category', 'date_created')
    list_display_links = ('id', 'title')
    search_fields = ('title',)
    list_per_page = 25
    summernote_fields = ('story_content',)


admin.site.register(StoryPost, Admin)

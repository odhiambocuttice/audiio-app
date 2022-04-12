from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.urls.conf import re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/radio-shows/', include('radio_shows.urls')),
    path('api/story-posts/', include('story_posts.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('summernote/', include('django_summernote.urls')),
] + static(settings.MEDIA_URL,
           document_root=settings.MEDIA_ROOT)


# handle routes from react side
# urlpatterns += [re_path(r'^.*',
#                         TemplateView.as_view(template_name='index.html'))]

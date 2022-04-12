from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from .views import RadioShowsUploadView, RadioShowsRetrievView

urlpatterns = [
    path('show-poster', RadioShowsRetrievView.as_view()),
    path('upload', RadioShowsUploadView.as_view()),
]

from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from .views import StoryPostFeaturedView, StoryPostCategoriesView, StoryPostDetailView, StoryPostListView

urlpatterns = [
    path('', StoryPostListView.as_view()),
    path('featured', StoryPostFeaturedView.as_view()),
    path('category', StoryPostCategoriesView.as_view()),
    path('<slug>', StoryPostDetailView.as_view()),
]

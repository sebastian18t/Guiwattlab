from django.urls import path, include
from .views import  UserView, LoginUserView
from rest_framework import routers

router = routers.DefaultRouter()
router.register('user', UserView)

urlpatterns = [
    path('', include(router.urls)),
    path('login', LoginUserView.as_view()),
]


from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from tasks.api.views import DayViewSet, TaskViewSet

router = routers.DefaultRouter()
router.register(r'days', DayViewSet)
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
]
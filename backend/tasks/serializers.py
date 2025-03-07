from rest_framework import serializers
from .models import Day, Week, Task

class TaskSerializer(serializers.ModelSerializer):
    type_display = serializers.CharField(source='get_type_display', read_only=True)
    created_by_username = serializers.CharField(source='created_by.username', read_only=True)
    
    class Meta:
        model = Task
        fields = ['id', 'type', 'type_display', 'day', 'created_by', 'created_by_username',
                  'updated_by', 'created_at', 'updated_at']
        read_only_fields = ['created_by', 'updated_by', 'created_at', 'updated_at']

class DaySerializer(serializers.ModelSerializer):
    tasks = TaskSerializer(many=True, read_only=True)
    
    class Meta:
        model = Day
        fields = ['id', 'date', 'week', 'tasks']

class WeekSerializer(serializers.ModelSerializer):
    days = DaySerializer(many=True, read_only=True)
    
    class Meta:
        model = Week
        fields = ['id', 'start_date', 'end_date', 'days']
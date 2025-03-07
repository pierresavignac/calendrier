from django.db import models
from django.contrib.auth.models import User

class Day(models.Model):
    date = models.DateField()
    week = models.ForeignKey('Week', on_delete=models.CASCADE, related_name='days')
    
    class Meta:
        ordering = ['date']
        unique_together = ['date', 'week']
    
    def __str__(self):
        return f'Jour {self.date}'

class Week(models.Model):
    start_date = models.DateField()
    end_date = models.DateField()
    
    class Meta:
        ordering = ['start_date']
    
    def __str__(self):
        return f'Semaine du {self.start_date} au {self.end_date}'

class Task(models.Model):
    TYPE_CHOICES = [
        ('installation', 'Installation'),
        ('maintenance', 'Maintenance'),
        ('reparation', 'Réparation'),
        ('autre', 'Autre'),
    ]
    
    type = models.CharField(max_length=50, choices=TYPE_CHOICES)
    day = models.ForeignKey(Day, on_delete=models.CASCADE, related_name='tasks')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks_created')
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks_updated')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f'{self.get_type_display()} - {self.day.date}'
@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'type', 'day', 'created_by', 'created_at', 'updated_at')
    list_filter = ('type', 'day__date', 'created_at')
    search_fields = ('type', 'day__date')
    date_hierarchy = 'created_at'
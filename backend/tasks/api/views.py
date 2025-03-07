class DayViewSet(viewsets.ModelViewSet):
    """API pour les jours"""
    queryset = Day.objects.all()
    serializer_class = DaySerializer
    permission_classes = [permissions.IsAuthenticated]
    
    @action(detail=True, methods=['get'])
    def tasks(self, request, pk=None):
        """Récupérer les tâches d'un jour"""
        day = self.get_object()
        tasks = Task.objects.filter(day=day)
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

class TaskViewSet(viewsets.ModelViewSet):
    """API pour les tâches"""
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsUtilisateurUser]
    filter_backends = [filters.SearchFilter]
    search_fields = ['type', 'day__date']
    
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user, updated_by=self.request.user)
    
    def perform_update(self, serializer):
        serializer.save(updated_by=self.request.user)
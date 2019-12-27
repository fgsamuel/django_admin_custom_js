from django.db import models

# Create your models here.


class Cliente(models.Model):
    nome = models.CharField(max_length=30)
    cpf = models.CharField(max_length=11, blank=True, null=True)
    cnpj = models.CharField(max_length=14, blank=True, null=True)

    def __str__(self):
        return self.nome

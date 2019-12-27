from django.contrib import admin

# Register your models here.
from exemplo.models import Cliente


class ClienteAdmin(admin.ModelAdmin):
    class Media:
        js = (
            '//ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
            'js/script.js',
        )


admin.site.register(Cliente, ClienteAdmin)

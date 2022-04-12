
from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-*r!2q_qg=5i=3s)98^!1)8iif_m+8n2#rk5w#5douwsmeq86c2'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'django_summernote',
    'djoser',
    'story_posts',
    # 'accounts',
    'radio_shows'
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
]

ROOT_URLCONF = 'audioapp.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR), 'build'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'audioapp.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'audioapp',
        'USER': 'postgres',
        'PASSWORD': 'password123',
        'HOST': 'localhost'

    }
}


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Africa/Nairobi'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)

STATIC_URL = '/static/'
STATICFILES_DIR = [
    # Collect static files from the npm buld output
    os.path.join(BASE_DIR, 'build/static')
]
STATIC_ROOT = os.path.join(BASE_DIR, 'static')  # where root static files live
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# REST_FRAMEWORK = {
#     'DEFAULT_PERMISSION_CLASSES': [
#         'rest_framework.permissions.AllowAny'
#     ]
# }

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
    ],
}

SIMPLE_JWT = {
    'AUTH_HEADER_TYPES': ('JWT',),
}

DJOSER = {
    'LOGIN_FIELD': 'email',

}

# DJOSER = {
#     'LOGIN_FIELD': 'email',
#     'USER_CREATE_PASSWORD_RETYPE': True,
#     'USERNAME_CHANGED_EMAIL_CONFIRMATION': True,
#     'PASSWORD_CHANGED_EMAIL_CONFIRMATION': True,
#     'SEND_CONFIRMATION_EMAIL': True,
#     'SET_PASSWORD_RETYPE': True,
#     'SET_USERNAME_RETYPE': True,
#     'PASSWORD_RESET_CONFIRM_URL': 'password/reset/confirm/{uid}/{token}',
#     'USERNAME_RESET_CONFIRM_URL': 'email/reset/confirm/{uid}/{token}',
#     'ACTIVATION_URL': 'activate/{uid}/{token}',
#     'SEND_ACTIVATION_EMAIL': True,
#     'SERIALIZERS': {
#         'user_create': 'accounts.serializers.UserCreateSerializer',
#         'user': 'accounts.serializers.UserCreateSerializer',
#         'user_delete': 'djoser.serializers.UserDeleteSerializers'
#     }

# }


X_FRAME_OPTIONS = 'SAMEORIGIN'

SUMMERNOTE_THEME = 'bs4'

CORS_ORIGIN_ALLOW_ALL = True

# AUTH_USER_MODEL = 'accounts.UserAccount'

# EMAIL
# email = 'audioapp97@gmail.com'
# password = 'lmafxhdokptjyajy'
EMAIL_BACKEND = 'django.core.mail.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'audioapp97@gmail.com'
EMAIL_HOST_PASSWORD = 'lmafxhdokptjyajy'
EMAIL_USE_TLS = True

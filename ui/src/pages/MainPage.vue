<script setup lang="ts">
import { PlBlockPage, PlBtnGroup, PlBtnPrimary, PlFileInput, PlLogView, PlSlideModal, PlTextField } from '@platforma-sdk/ui-vue';
import { ref } from 'vue';
import { useApp } from '../app';

const app = useApp();

const alphabetOptions = [
  {
    text: "Nucleotide",
    value: "nucl"
  },
  {
    text: "Protein",
    value: "prot"
  }
]
const args = app.createArgsModel();

const settingsAreShown = ref(true)
const showSettings = () => { settingsAreShown.value = true }
</script>

<template>
  <PlBlockPage>
    <template #title>Make BLAST Database</template>
    <template #append>
      <PlBtnPrimary @click.stop="showSettings">Settings</PlBtnPrimary>
    </template>

    <PlLogView :value="app.outputValues.log" />
    <PlSlideModal v-model="settingsAreShown">
      <template #title>Settings</template>

      <PlTextField v-model="args.model.title" label="Database title" clearable />
      
      <PlFileInput v-model="args.model.fastaFile" :progress="app.outputValues.uploadProgress"
        placeholder="Select .fasta file" file-dialog-title="Select fasta file" clearable />

      <PlBtnGroup v-model="args.model.dataType" :options="alphabetOptions" label="Sequences type" />
    </PlSlideModal>

  </PlBlockPage>
</template>
